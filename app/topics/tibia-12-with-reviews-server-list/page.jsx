import Tibia12WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-12-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsServerListKeywordPage />;
}
