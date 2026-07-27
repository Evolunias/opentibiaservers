import Classicus12WithScreenshotsServerKeywordPage, { generateMetadata } from './classicus-12-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12WithScreenshotsServerKeywordPage />;
}
