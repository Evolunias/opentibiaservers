import Luminera11WithScreenshotsServerKeywordPage, { generateMetadata } from './luminera-11-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11WithScreenshotsServerKeywordPage />;
}
