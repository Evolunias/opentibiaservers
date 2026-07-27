import Tibia80WithReviewsServerKeywordPage, { generateMetadata } from './tibia-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithReviewsServerKeywordPage />;
}
