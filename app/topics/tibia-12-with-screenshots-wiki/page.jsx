import Tibia12WithScreenshotsWikiKeywordPage, { generateMetadata } from './tibia-12-with-screenshots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithScreenshotsWikiKeywordPage />;
}
