import Tibia96WithScreenshotsSeasonKeywordPage, { generateMetadata } from './tibia-9-6-with-screenshots-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithScreenshotsSeasonKeywordPage />;
}
