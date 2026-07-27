import Tibia100WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-10-0-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithReviewsServerListKeywordPage />;
}
