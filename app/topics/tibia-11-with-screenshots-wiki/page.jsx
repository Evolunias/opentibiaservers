import Tibia11WithScreenshotsWikiKeywordPage, { generateMetadata } from './tibia-11-with-screenshots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithScreenshotsWikiKeywordPage />;
}
