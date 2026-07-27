import Thornia14WithScreenshotsServerKeywordPage, { generateMetadata } from './thornia-14-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14WithScreenshotsServerKeywordPage />;
}
