import Alastera96WithScreenshotsServerKeywordPage, { generateMetadata } from './alastera-9-6-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96WithScreenshotsServerKeywordPage />;
}
