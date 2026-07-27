import Tibia11SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-11-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalSeasonKeywordPage />;
}
