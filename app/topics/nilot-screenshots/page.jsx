import NilotScreenshotsKeywordPage, { generateMetadata } from './nilot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotScreenshotsKeywordPage />;
}
