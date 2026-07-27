import TibianusWithReviewsServerUsaKeywordPage, { generateMetadata } from './tibianus-with-reviews-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusWithReviewsServerUsaKeywordPage />;
}
