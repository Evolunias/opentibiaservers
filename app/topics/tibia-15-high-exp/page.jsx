import Tibia15HighExpKeywordPage, { generateMetadata } from './tibia-15-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15HighExpKeywordPage />;
}
