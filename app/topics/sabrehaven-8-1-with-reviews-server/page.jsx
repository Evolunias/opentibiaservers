import Sabrehaven81WithReviewsServerKeywordPage, { generateMetadata } from './sabrehaven-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven81WithReviewsServerKeywordPage />;
}
