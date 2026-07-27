import Luminera14WithScreenshotsServerKeywordPage, { generateMetadata } from './luminera-14-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14WithScreenshotsServerKeywordPage />;
}
