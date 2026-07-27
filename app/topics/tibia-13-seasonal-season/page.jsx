import Tibia13SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-13-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalSeasonKeywordPage />;
}
