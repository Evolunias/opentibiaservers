import Tibia12WithReviewsServerKeywordPage, { generateMetadata } from './tibia-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsServerKeywordPage />;
}
