import VenoreotReviewsKeywordPage, { generateMetadata } from './venoreot-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotReviewsKeywordPage />;
}
