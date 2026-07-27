import Medivia11WithScreenshotsServerKeywordPage, { generateMetadata } from './medivia-11-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11WithScreenshotsServerKeywordPage />;
}
