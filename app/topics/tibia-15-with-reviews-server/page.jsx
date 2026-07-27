import Tibia15WithReviewsServerKeywordPage, { generateMetadata } from './tibia-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithReviewsServerKeywordPage />;
}
