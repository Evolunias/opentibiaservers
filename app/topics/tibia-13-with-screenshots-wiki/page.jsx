import Tibia13WithScreenshotsWikiKeywordPage, { generateMetadata } from './tibia-13-with-screenshots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithScreenshotsWikiKeywordPage />;
}
