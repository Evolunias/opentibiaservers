import DuraOnline15WithReviewsServerKeywordPage, { generateMetadata } from './dura-online-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline15WithReviewsServerKeywordPage />;
}
