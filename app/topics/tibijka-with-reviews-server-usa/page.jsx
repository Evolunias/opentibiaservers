import TibijkaWithReviewsServerUsaKeywordPage, { generateMetadata } from './tibijka-with-reviews-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaWithReviewsServerUsaKeywordPage />;
}
