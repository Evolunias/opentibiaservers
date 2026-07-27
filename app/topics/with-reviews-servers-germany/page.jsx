import WithReviewsServersGermanyKeywordPage, { generateMetadata } from './with-reviews-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServersGermanyKeywordPage />;
}
