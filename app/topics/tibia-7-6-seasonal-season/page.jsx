import Tibia76SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalSeasonKeywordPage />;
}
