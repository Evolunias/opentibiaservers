import Tibia96WithScreenshotsWikiKeywordPage, { generateMetadata } from './tibia-9-6-with-screenshots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithScreenshotsWikiKeywordPage />;
}
