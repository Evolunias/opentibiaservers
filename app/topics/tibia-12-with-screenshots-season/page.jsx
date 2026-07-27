import Tibia12WithScreenshotsSeasonKeywordPage, { generateMetadata } from './tibia-12-with-screenshots-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithScreenshotsSeasonKeywordPage />;
}
