import Thornia11WithScreenshotsServerKeywordPage, { generateMetadata } from './thornia-11-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11WithScreenshotsServerKeywordPage />;
}
