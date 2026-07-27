import WithReviewsOtServerUsaKeywordPage, { generateMetadata } from './with-reviews-ot-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtServerUsaKeywordPage />;
}
