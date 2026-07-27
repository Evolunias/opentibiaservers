import Tibia1098ServerReviewsKeywordPage, { generateMetadata } from './tibia-10-98-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerReviewsKeywordPage />;
}
