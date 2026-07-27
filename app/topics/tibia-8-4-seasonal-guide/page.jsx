import Tibia84SeasonalGuideKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalGuideKeywordPage />;
}
