import BaiakServerReviewsKeywordPage, { generateMetadata } from './baiak-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerReviewsKeywordPage />;
}
