import Tibia100SeasonalGuideKeywordPage, { generateMetadata } from './tibia-10-0-seasonal-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100SeasonalGuideKeywordPage />;
}
