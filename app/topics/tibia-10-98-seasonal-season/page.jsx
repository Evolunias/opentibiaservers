import Tibia1098SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalSeasonKeywordPage />;
}
