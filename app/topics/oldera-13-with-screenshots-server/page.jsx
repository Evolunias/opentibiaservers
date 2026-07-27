import Oldera13WithScreenshotsServerKeywordPage, { generateMetadata } from './oldera-13-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13WithScreenshotsServerKeywordPage />;
}
