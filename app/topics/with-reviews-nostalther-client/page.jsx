import WithReviewsNostaltherClientKeywordPage, { generateMetadata } from './with-reviews-nostalther-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherClientKeywordPage />;
}
