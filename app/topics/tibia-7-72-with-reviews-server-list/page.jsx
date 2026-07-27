import Tibia772WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-7-72-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithReviewsServerListKeywordPage />;
}
