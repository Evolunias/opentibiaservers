import WithReviewsElderaOtServerKeywordPage, { generateMetadata } from './with-reviews-eldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaOtServerKeywordPage />;
}
