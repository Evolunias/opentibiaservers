import WithReviewsEvoleraClientKeywordPage, { generateMetadata } from './with-reviews-evolera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoleraClientKeywordPage />;
}
