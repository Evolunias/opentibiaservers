import WithReviewsCarlinotWebsiteKeywordPage, { generateMetadata } from './with-reviews-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCarlinotWebsiteKeywordPage />;
}
