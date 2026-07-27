import Thornia15WithScreenshotsServerKeywordPage, { generateMetadata } from './thornia-15-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15WithScreenshotsServerKeywordPage />;
}
