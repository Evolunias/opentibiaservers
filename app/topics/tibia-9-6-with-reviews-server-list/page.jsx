import Tibia96WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-9-6-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithReviewsServerListKeywordPage />;
}
