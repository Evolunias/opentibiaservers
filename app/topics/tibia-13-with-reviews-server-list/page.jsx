import Tibia13WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-13-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithReviewsServerListKeywordPage />;
}
