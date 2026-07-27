import WithReviewsNostaltherPrivateServerKeywordPage, { generateMetadata } from './with-reviews-nostalther-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherPrivateServerKeywordPage />;
}
