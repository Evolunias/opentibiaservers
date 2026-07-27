import Classicus96WithScreenshotsServerKeywordPage, { generateMetadata } from './classicus-9-6-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus96WithScreenshotsServerKeywordPage />;
}
