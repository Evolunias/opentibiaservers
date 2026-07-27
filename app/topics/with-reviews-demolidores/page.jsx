import WithReviewsDemolidoresKeywordPage, { generateMetadata } from './with-reviews-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDemolidoresKeywordPage />;
}
