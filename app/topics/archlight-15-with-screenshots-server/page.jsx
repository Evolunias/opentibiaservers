import Archlight15WithScreenshotsServerKeywordPage, { generateMetadata } from './archlight-15-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15WithScreenshotsServerKeywordPage />;
}
