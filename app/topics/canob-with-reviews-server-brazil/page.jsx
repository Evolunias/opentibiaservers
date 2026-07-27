import CanobWithReviewsServerBrazilKeywordPage, { generateMetadata } from './canob-with-reviews-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobWithReviewsServerBrazilKeywordPage />;
}
