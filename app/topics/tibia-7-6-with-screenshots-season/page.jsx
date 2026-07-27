import Tibia76WithScreenshotsSeasonKeywordPage, { generateMetadata } from './tibia-7-6-with-screenshots-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithScreenshotsSeasonKeywordPage />;
}
