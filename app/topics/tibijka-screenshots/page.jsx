import TibijkaScreenshotsKeywordPage, { generateMetadata } from './tibijka-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaScreenshotsKeywordPage />;
}
