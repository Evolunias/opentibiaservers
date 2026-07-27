import BaiakIlusion12WithReviewsServerKeywordPage, { generateMetadata } from './baiak-ilusion-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusion12WithReviewsServerKeywordPage />;
}
