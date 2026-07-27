import Thornia13WithScreenshotsServerKeywordPage, { generateMetadata } from './thornia-13-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13WithScreenshotsServerKeywordPage />;
}
