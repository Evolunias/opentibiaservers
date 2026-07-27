import Tibia80WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-8-0-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithReviewsServerListKeywordPage />;
}
