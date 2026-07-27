import Tibia11WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-11-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithReviewsServerListKeywordPage />;
}
