import MediviaScreenshotsKeywordPage, { generateMetadata } from './medivia-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaScreenshotsKeywordPage />;
}
