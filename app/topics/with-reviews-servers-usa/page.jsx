import WithReviewsServersUsaKeywordPage, { generateMetadata } from './with-reviews-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServersUsaKeywordPage />;
}
