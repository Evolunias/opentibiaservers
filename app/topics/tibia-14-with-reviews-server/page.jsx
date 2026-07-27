import Tibia14WithReviewsServerKeywordPage, { generateMetadata } from './tibia-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithReviewsServerKeywordPage />;
}
