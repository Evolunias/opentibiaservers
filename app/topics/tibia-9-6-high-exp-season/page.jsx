import Tibia96HighExpSeasonKeywordPage, { generateMetadata } from './tibia-9-6-high-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96HighExpSeasonKeywordPage />;
}
