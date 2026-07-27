import Tibia84WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-8-4-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithReviewsServerListKeywordPage />;
}
