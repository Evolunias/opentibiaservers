import Medivia13WithScreenshotsServerKeywordPage, { generateMetadata } from './medivia-13-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia13WithScreenshotsServerKeywordPage />;
}
