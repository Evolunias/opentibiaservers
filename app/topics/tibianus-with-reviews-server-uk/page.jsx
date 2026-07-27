import TibianusWithReviewsServerUkKeywordPage, { generateMetadata } from './tibianus-with-reviews-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusWithReviewsServerUkKeywordPage />;
}
