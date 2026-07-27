import Tibia80SeasonalGuideKeywordPage, { generateMetadata } from './tibia-8-0-seasonal-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80SeasonalGuideKeywordPage />;
}
