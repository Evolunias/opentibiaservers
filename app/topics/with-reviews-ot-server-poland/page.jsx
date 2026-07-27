import WithReviewsOtServerPolandKeywordPage, { generateMetadata } from './with-reviews-ot-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtServerPolandKeywordPage />;
}
