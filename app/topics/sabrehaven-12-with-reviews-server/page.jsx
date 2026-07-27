import Sabrehaven12WithReviewsServerKeywordPage, { generateMetadata } from './sabrehaven-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven12WithReviewsServerKeywordPage />;
}
