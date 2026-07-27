import Tibia15WithScreenshotsSeasonKeywordPage, { generateMetadata } from './tibia-15-with-screenshots-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithScreenshotsSeasonKeywordPage />;
}
