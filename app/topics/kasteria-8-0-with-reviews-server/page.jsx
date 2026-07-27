import Kasteria80WithReviewsServerKeywordPage, { generateMetadata } from './kasteria-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria80WithReviewsServerKeywordPage />;
}
