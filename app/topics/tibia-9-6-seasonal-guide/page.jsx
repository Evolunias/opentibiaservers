import Tibia96SeasonalGuideKeywordPage, { generateMetadata } from './tibia-9-6-seasonal-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96SeasonalGuideKeywordPage />;
}
