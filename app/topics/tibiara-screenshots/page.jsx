import TibiaraScreenshotsKeywordPage, { generateMetadata } from './tibiara-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraScreenshotsKeywordPage />;
}
