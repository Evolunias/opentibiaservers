import Canob12WithScreenshotsServerKeywordPage, { generateMetadata } from './canob-12-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12WithScreenshotsServerKeywordPage />;
}
