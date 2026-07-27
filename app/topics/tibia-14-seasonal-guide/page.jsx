import Tibia14SeasonalGuideKeywordPage, { generateMetadata } from './tibia-14-seasonal-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalGuideKeywordPage />;
}
