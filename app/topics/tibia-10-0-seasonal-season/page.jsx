import Tibia100SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-10-0-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100SeasonalSeasonKeywordPage />;
}
