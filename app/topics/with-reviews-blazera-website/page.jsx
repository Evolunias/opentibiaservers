import WithReviewsBlazeraWebsiteKeywordPage, { generateMetadata } from './with-reviews-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraWebsiteKeywordPage />;
}
