import Tibia15SeasonalGuideKeywordPage, { generateMetadata } from './tibia-15-seasonal-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalGuideKeywordPage />;
}
