import Archlight13WithScreenshotsServerKeywordPage, { generateMetadata } from './archlight-13-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13WithScreenshotsServerKeywordPage />;
}
