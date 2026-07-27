import Thornia12WithScreenshotsServerKeywordPage, { generateMetadata } from './thornia-12-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12WithScreenshotsServerKeywordPage />;
}
