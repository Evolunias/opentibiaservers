import WithReviewsArchlightOtsKeywordPage, { generateMetadata } from './with-reviews-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArchlightOtsKeywordPage />;
}
