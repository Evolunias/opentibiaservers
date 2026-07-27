import Canob14WithScreenshotsServerKeywordPage, { generateMetadata } from './canob-14-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14WithScreenshotsServerKeywordPage />;
}
