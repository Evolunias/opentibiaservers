import Tibia71SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-7-1-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71SeasonalSeasonKeywordPage />;
}
