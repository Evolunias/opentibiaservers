import RealestaWithReviewsServerUsaKeywordPage, { generateMetadata } from './realesta-with-reviews-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaWithReviewsServerUsaKeywordPage />;
}
