import WithReviewsNostaltherOtsKeywordPage, { generateMetadata } from './with-reviews-nostalther-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherOtsKeywordPage />;
}
