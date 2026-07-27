import Tibia100HighExpSeasonKeywordPage, { generateMetadata } from './tibia-10-0-high-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100HighExpSeasonKeywordPage />;
}
