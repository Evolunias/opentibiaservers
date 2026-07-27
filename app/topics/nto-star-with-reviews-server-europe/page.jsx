import NtoStarWithReviewsServerEuropeKeywordPage, { generateMetadata } from './nto-star-with-reviews-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarWithReviewsServerEuropeKeywordPage />;
}
