import RealestaScreenshotsKeywordPage, { generateMetadata } from './realesta-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaScreenshotsKeywordPage />;
}
