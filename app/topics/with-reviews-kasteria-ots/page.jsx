import WithReviewsKasteriaOtsKeywordPage, { generateMetadata } from './with-reviews-kasteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaOtsKeywordPage />;
}
