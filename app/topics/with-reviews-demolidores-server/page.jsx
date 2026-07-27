import WithReviewsDemolidoresServerKeywordPage, { generateMetadata } from './with-reviews-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDemolidoresServerKeywordPage />;
}
