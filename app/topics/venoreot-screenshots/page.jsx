import VenoreotScreenshotsKeywordPage, { generateMetadata } from './venoreot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotScreenshotsKeywordPage />;
}
