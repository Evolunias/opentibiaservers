import CanobWithReviewsServerMexicoKeywordPage, { generateMetadata } from './canob-with-reviews-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobWithReviewsServerMexicoKeywordPage />;
}
