import Tibia13SeasonalGuideKeywordPage, { generateMetadata } from './tibia-13-seasonal-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalGuideKeywordPage />;
}
