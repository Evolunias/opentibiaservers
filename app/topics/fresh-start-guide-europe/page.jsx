import FreshStartGuideEuropeKeywordPage, { generateMetadata } from './fresh-start-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGuideEuropeKeywordPage />;
}
