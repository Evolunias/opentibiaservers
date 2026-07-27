import Tibia80BaiakReviewKeywordPage, { generateMetadata } from './tibia-8-0-baiak-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80BaiakReviewKeywordPage />;
}
