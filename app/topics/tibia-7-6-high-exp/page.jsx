import Tibia76HighExpKeywordPage, { generateMetadata } from './tibia-7-6-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76HighExpKeywordPage />;
}
