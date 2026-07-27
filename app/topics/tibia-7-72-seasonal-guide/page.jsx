import Tibia772SeasonalGuideKeywordPage, { generateMetadata } from './tibia-7-72-seasonal-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772SeasonalGuideKeywordPage />;
}
