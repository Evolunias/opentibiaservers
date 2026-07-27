import Tibia12BaiakReviewKeywordPage, { generateMetadata } from './tibia-12-baiak-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12BaiakReviewKeywordPage />;
}
