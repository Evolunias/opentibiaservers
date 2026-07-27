import WithReviewsDuraOnlineServerKeywordPage, { generateMetadata } from './with-reviews-dura-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDuraOnlineServerKeywordPage />;
}
