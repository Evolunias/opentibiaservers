import WithReviewsNostaltherServerKeywordPage, { generateMetadata } from './with-reviews-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherServerKeywordPage />;
}
