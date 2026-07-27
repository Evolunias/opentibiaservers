import NepreniaWithReviewsServerPolandKeywordPage, { generateMetadata } from './neprenia-with-reviews-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaWithReviewsServerPolandKeywordPage />;
}
