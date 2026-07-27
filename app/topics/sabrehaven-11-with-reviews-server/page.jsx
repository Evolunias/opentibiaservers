import Sabrehaven11WithReviewsServerKeywordPage, { generateMetadata } from './sabrehaven-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven11WithReviewsServerKeywordPage />;
}
