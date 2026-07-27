import Classicus71WithScreenshotsServerKeywordPage, { generateMetadata } from './classicus-7-1-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71WithScreenshotsServerKeywordPage />;
}
