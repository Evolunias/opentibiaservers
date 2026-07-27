import Classicus14WithScreenshotsServerKeywordPage, { generateMetadata } from './classicus-14-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14WithScreenshotsServerKeywordPage />;
}
