import Tibia84SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalSeasonKeywordPage />;
}
