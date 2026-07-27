import Classicus80WithScreenshotsServerKeywordPage, { generateMetadata } from './classicus-8-0-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80WithScreenshotsServerKeywordPage />;
}
