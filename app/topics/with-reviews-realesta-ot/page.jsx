import WithReviewsRealestaOtKeywordPage, { generateMetadata } from './with-reviews-realesta-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaOtKeywordPage />;
}
