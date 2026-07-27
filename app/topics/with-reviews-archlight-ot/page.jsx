import WithReviewsArchlightOtKeywordPage, { generateMetadata } from './with-reviews-archlight-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArchlightOtKeywordPage />;
}
