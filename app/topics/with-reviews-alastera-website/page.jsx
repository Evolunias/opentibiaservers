import WithReviewsAlasteraWebsiteKeywordPage, { generateMetadata } from './with-reviews-alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraWebsiteKeywordPage />;
}
