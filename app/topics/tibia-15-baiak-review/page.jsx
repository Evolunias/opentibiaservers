import Tibia15BaiakReviewKeywordPage, { generateMetadata } from './tibia-15-baiak-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15BaiakReviewKeywordPage />;
}
