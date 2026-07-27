import Tibia1098WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-10-98-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithReviewsServerListKeywordPage />;
}
