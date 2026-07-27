import Tibia15WithScreenshotsWikiKeywordPage, { generateMetadata } from './tibia-15-with-screenshots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithScreenshotsWikiKeywordPage />;
}
