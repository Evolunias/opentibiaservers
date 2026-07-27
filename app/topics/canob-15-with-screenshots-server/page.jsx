import Canob15WithScreenshotsServerKeywordPage, { generateMetadata } from './canob-15-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15WithScreenshotsServerKeywordPage />;
}
