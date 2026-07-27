import DuraOnline13WithReviewsServerKeywordPage, { generateMetadata } from './dura-online-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline13WithReviewsServerKeywordPage />;
}
