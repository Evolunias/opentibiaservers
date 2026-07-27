import Luminera13WithScreenshotsServerKeywordPage, { generateMetadata } from './luminera-13-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13WithScreenshotsServerKeywordPage />;
}
