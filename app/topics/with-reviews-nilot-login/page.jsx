import WithReviewsNilotLoginKeywordPage, { generateMetadata } from './with-reviews-nilot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNilotLoginKeywordPage />;
}
