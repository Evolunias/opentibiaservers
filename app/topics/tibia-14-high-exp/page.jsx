import Tibia14HighExpKeywordPage, { generateMetadata } from './tibia-14-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14HighExpKeywordPage />;
}
