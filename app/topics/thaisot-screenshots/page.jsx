import ThaisotScreenshotsKeywordPage, { generateMetadata } from './thaisot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotScreenshotsKeywordPage />;
}
