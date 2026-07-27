import WithReviewsBlazeraClientKeywordPage, { generateMetadata } from './with-reviews-blazera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraClientKeywordPage />;
}
