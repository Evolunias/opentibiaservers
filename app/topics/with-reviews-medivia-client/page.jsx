import WithReviewsMediviaClientKeywordPage, { generateMetadata } from './with-reviews-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaClientKeywordPage />;
}
