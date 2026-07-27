import Tibia1098SeasonalGuideKeywordPage, { generateMetadata } from './tibia-10-98-seasonal-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098SeasonalGuideKeywordPage />;
}
