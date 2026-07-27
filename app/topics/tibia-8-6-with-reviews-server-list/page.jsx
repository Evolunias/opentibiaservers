import Tibia86WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-8-6-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithReviewsServerListKeywordPage />;
}
