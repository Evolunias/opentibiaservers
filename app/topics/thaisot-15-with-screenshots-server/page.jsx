import Thaisot15WithScreenshotsServerKeywordPage, { generateMetadata } from './thaisot-15-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15WithScreenshotsServerKeywordPage />;
}
