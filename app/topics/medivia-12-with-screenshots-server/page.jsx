import Medivia12WithScreenshotsServerKeywordPage, { generateMetadata } from './medivia-12-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12WithScreenshotsServerKeywordPage />;
}
