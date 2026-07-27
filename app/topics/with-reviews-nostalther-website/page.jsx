import WithReviewsNostaltherWebsiteKeywordPage, { generateMetadata } from './with-reviews-nostalther-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherWebsiteKeywordPage />;
}
