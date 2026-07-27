import Tibia772WithReviewsServerKeywordPage, { generateMetadata } from './tibia-7-72-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithReviewsServerKeywordPage />;
}
