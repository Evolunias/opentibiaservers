import WithReviewsKasteriaOtKeywordPage, { generateMetadata } from './with-reviews-kasteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaOtKeywordPage />;
}
