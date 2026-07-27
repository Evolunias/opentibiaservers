import WithReviewsRubinotWebsiteKeywordPage, { generateMetadata } from './with-reviews-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotWebsiteKeywordPage />;
}
