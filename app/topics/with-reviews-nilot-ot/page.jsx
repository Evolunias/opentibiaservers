import WithReviewsNilotOtKeywordPage, { generateMetadata } from './with-reviews-nilot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNilotOtKeywordPage />;
}
