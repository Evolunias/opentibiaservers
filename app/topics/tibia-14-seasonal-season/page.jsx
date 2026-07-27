import Tibia14SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-14-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalSeasonKeywordPage />;
}
