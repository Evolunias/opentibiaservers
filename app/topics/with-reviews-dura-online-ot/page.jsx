import WithReviewsDuraOnlineOtKeywordPage, { generateMetadata } from './with-reviews-dura-online-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDuraOnlineOtKeywordPage />;
}
