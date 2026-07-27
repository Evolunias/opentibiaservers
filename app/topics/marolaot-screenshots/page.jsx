import MarolaotScreenshotsKeywordPage, { generateMetadata } from './marolaot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotScreenshotsKeywordPage />;
}
