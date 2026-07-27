import WithReviewsArchlightOtServerKeywordPage, { generateMetadata } from './with-reviews-archlight-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArchlightOtServerKeywordPage />;
}
