import Tibia84WithScreenshotsWikiKeywordPage, { generateMetadata } from './tibia-8-4-with-screenshots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithScreenshotsWikiKeywordPage />;
}
