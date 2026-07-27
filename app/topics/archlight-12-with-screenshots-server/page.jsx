import Archlight12WithScreenshotsServerKeywordPage, { generateMetadata } from './archlight-12-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12WithScreenshotsServerKeywordPage />;
}
