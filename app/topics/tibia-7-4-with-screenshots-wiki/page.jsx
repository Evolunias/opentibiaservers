import Tibia74WithScreenshotsWikiKeywordPage, { generateMetadata } from './tibia-7-4-with-screenshots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithScreenshotsWikiKeywordPage />;
}
