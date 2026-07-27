import Classicus13WithScreenshotsServerKeywordPage, { generateMetadata } from './classicus-13-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13WithScreenshotsServerKeywordPage />;
}
