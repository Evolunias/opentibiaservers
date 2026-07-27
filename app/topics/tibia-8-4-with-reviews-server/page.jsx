import Tibia84WithReviewsServerKeywordPage, { generateMetadata } from './tibia-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithReviewsServerKeywordPage />;
}
