import RealeraWithReviewsServerUsaKeywordPage, { generateMetadata } from './realera-with-reviews-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraWithReviewsServerUsaKeywordPage />;
}
