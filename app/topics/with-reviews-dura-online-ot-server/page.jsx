import WithReviewsDuraOnlineOtServerKeywordPage, { generateMetadata } from './with-reviews-dura-online-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDuraOnlineOtServerKeywordPage />;
}
