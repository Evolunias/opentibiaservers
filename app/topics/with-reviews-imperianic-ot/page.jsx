import WithReviewsImperianicOtKeywordPage, { generateMetadata } from './with-reviews-imperianic-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsImperianicOtKeywordPage />;
}
