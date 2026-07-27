import NtoStar15WithReviewsServerKeywordPage, { generateMetadata } from './nto-star-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15WithReviewsServerKeywordPage />;
}
