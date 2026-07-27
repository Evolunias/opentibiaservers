import Tibia12SeasonalGuideKeywordPage, { generateMetadata } from './tibia-12-seasonal-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalGuideKeywordPage />;
}
