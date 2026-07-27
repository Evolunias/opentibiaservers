import WithReviewsEvoleraKeywordPage, { generateMetadata } from './with-reviews-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoleraKeywordPage />;
}
