import Canob13WithScreenshotsServerKeywordPage, { generateMetadata } from './canob-13-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13WithScreenshotsServerKeywordPage />;
}
