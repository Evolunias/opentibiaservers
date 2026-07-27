import Tibia81SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-8-1-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81SeasonalSeasonKeywordPage />;
}
