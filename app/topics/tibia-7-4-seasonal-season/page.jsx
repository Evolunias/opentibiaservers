import Tibia74SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalSeasonKeywordPage />;
}
