import DuraOnlineReviewsKeywordPage, { generateMetadata } from './dura-online-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineReviewsKeywordPage />;
}
