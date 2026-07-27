import Classicus11WithScreenshotsServerKeywordPage, { generateMetadata } from './classicus-11-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11WithScreenshotsServerKeywordPage />;
}
