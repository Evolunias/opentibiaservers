import Luminera96WithScreenshotsServerKeywordPage, { generateMetadata } from './luminera-9-6-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96WithScreenshotsServerKeywordPage />;
}
