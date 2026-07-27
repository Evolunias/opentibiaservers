import WithReviewsKasteriaOtServerKeywordPage, { generateMetadata } from './with-reviews-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaOtServerKeywordPage />;
}
