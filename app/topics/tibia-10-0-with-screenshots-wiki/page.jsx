import Tibia100WithScreenshotsWikiKeywordPage, { generateMetadata } from './tibia-10-0-with-screenshots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithScreenshotsWikiKeywordPage />;
}
