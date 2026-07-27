import WithReviewsReviewFranceKeywordPage, { generateMetadata } from './with-reviews-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsReviewFranceKeywordPage />;
}
