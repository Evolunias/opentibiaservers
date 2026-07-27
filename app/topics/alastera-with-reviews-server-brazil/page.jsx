import AlasteraWithReviewsServerBrazilKeywordPage, { generateMetadata } from './alastera-with-reviews-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraWithReviewsServerBrazilKeywordPage />;
}
