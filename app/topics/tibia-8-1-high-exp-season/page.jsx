import Tibia81HighExpSeasonKeywordPage, { generateMetadata } from './tibia-8-1-high-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81HighExpSeasonKeywordPage />;
}
