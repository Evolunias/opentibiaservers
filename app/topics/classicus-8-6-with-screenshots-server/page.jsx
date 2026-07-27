import Classicus86WithScreenshotsServerKeywordPage, { generateMetadata } from './classicus-8-6-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus86WithScreenshotsServerKeywordPage />;
}
