import Tibia86ServerReviewsKeywordPage, { generateMetadata } from './tibia-8-6-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerReviewsKeywordPage />;
}
