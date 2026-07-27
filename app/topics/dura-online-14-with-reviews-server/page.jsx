import DuraOnline14WithReviewsServerKeywordPage, { generateMetadata } from './dura-online-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline14WithReviewsServerKeywordPage />;
}
