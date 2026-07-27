import Tibia86WithReviewsServerKeywordPage, { generateMetadata } from './tibia-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithReviewsServerKeywordPage />;
}
