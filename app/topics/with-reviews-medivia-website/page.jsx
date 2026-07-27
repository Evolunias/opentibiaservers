import WithReviewsMediviaWebsiteKeywordPage, { generateMetadata } from './with-reviews-medivia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaWebsiteKeywordPage />;
}
