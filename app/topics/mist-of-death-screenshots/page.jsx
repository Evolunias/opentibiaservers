import MistOfDeathScreenshotsKeywordPage, { generateMetadata } from './mist-of-death-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathScreenshotsKeywordPage />;
}
