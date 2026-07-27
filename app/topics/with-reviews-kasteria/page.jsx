import WithReviewsKasteriaKeywordPage, { generateMetadata } from './with-reviews-kasteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaKeywordPage />;
}
