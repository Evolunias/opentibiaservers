import Tibia12SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-12-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalSeasonKeywordPage />;
}
