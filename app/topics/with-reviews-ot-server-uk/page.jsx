import WithReviewsOtServerUkKeywordPage, { generateMetadata } from './with-reviews-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtServerUkKeywordPage />;
}
