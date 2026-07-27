import Tibia11WithScreenshotsSeasonKeywordPage, { generateMetadata } from './tibia-11-with-screenshots-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithScreenshotsSeasonKeywordPage />;
}
