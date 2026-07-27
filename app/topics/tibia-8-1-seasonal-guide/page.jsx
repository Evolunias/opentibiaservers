import Tibia81SeasonalGuideKeywordPage, { generateMetadata } from './tibia-8-1-seasonal-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81SeasonalGuideKeywordPage />;
}
