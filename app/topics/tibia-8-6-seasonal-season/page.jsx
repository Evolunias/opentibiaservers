import Tibia86SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-8-6-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86SeasonalSeasonKeywordPage />;
}
