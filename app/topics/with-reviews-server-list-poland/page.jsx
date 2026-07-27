import WithReviewsServerListPolandKeywordPage, { generateMetadata } from './with-reviews-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServerListPolandKeywordPage />;
}
