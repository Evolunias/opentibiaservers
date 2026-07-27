import Tibia80WithScreenshotsSeasonKeywordPage, { generateMetadata } from './tibia-8-0-with-screenshots-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithScreenshotsSeasonKeywordPage />;
}
