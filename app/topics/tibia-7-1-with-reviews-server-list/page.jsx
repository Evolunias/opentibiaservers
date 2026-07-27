import Tibia71WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-7-1-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithReviewsServerListKeywordPage />;
}
