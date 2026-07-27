import Oldera15WithScreenshotsServerKeywordPage, { generateMetadata } from './oldera-15-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15WithScreenshotsServerKeywordPage />;
}
