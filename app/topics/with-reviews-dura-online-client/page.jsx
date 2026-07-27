import WithReviewsDuraOnlineClientKeywordPage, { generateMetadata } from './with-reviews-dura-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDuraOnlineClientKeywordPage />;
}
