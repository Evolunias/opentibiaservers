import Tibia13ServerReviewsKeywordPage, { generateMetadata } from './tibia-13-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerReviewsKeywordPage />;
}
