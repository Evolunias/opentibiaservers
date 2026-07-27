import OlderaScreenshotsKeywordPage, { generateMetadata } from './oldera-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaScreenshotsKeywordPage />;
}
