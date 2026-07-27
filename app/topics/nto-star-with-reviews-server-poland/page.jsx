import NtoStarWithReviewsServerPolandKeywordPage, { generateMetadata } from './nto-star-with-reviews-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarWithReviewsServerPolandKeywordPage />;
}
