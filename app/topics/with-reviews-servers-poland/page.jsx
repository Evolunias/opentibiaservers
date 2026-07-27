import WithReviewsServersPolandKeywordPage, { generateMetadata } from './with-reviews-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServersPolandKeywordPage />;
}
