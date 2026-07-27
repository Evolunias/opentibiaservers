import WithReviewsClientPolandKeywordPage, { generateMetadata } from './with-reviews-client-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClientPolandKeywordPage />;
}
