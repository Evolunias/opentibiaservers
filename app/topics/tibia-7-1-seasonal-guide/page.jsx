import Tibia71SeasonalGuideKeywordPage, { generateMetadata } from './tibia-7-1-seasonal-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71SeasonalGuideKeywordPage />;
}
