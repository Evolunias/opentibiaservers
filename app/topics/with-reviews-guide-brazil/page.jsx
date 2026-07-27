import WithReviewsGuideBrazilKeywordPage, { generateMetadata } from './with-reviews-guide-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGuideBrazilKeywordPage />;
}
