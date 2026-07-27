import WithReviewsElderaOtKeywordPage, { generateMetadata } from './with-reviews-eldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaOtKeywordPage />;
}
