import Thaisot13WithScreenshotsServerKeywordPage, { generateMetadata } from './thaisot-13-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13WithScreenshotsServerKeywordPage />;
}
