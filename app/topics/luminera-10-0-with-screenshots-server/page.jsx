import Luminera100WithScreenshotsServerKeywordPage, { generateMetadata } from './luminera-10-0-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100WithScreenshotsServerKeywordPage />;
}
