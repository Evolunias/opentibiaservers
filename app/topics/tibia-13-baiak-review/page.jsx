import Tibia13BaiakReviewKeywordPage, { generateMetadata } from './tibia-13-baiak-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakReviewKeywordPage />;
}
