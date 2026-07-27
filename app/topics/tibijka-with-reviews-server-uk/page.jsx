import TibijkaWithReviewsServerUkKeywordPage, { generateMetadata } from './tibijka-with-reviews-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaWithReviewsServerUkKeywordPage />;
}
