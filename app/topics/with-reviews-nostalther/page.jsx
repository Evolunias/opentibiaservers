import WithReviewsNostaltherKeywordPage, { generateMetadata } from './with-reviews-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherKeywordPage />;
}
