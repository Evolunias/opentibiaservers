import Tibia1098HighExpKeywordPage, { generateMetadata } from './tibia-10-98-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098HighExpKeywordPage />;
}
