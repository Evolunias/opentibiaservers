import DuraOnline11WithReviewsServerKeywordPage, { generateMetadata } from './dura-online-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline11WithReviewsServerKeywordPage />;
}
