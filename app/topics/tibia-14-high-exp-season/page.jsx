import Tibia14HighExpSeasonKeywordPage, { generateMetadata } from './tibia-14-high-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14HighExpSeasonKeywordPage />;
}
