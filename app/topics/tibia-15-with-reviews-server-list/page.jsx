import Tibia15WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-15-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithReviewsServerListKeywordPage />;
}
