import Tibia14WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-14-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithReviewsServerListKeywordPage />;
}
