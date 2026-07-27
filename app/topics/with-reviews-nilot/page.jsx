import WithReviewsNilotKeywordPage, { generateMetadata } from './with-reviews-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNilotKeywordPage />;
}
