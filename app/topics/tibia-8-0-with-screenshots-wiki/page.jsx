import Tibia80WithScreenshotsWikiKeywordPage, { generateMetadata } from './tibia-8-0-with-screenshots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithScreenshotsWikiKeywordPage />;
}
