import Tibia11BaiakReviewKeywordPage, { generateMetadata } from './tibia-11-baiak-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakReviewKeywordPage />;
}
