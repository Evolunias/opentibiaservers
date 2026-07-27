import Tibia81WithScreenshotsSeasonKeywordPage, { generateMetadata } from './tibia-8-1-with-screenshots-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithScreenshotsSeasonKeywordPage />;
}
