import Archlight11WithScreenshotsServerKeywordPage, { generateMetadata } from './archlight-11-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11WithScreenshotsServerKeywordPage />;
}
