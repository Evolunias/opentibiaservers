import Alastera12WithScreenshotsServerKeywordPage, { generateMetadata } from './alastera-12-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12WithScreenshotsServerKeywordPage />;
}
