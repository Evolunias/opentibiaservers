import Evolunia13WithReviewsServerKeywordPage, { generateMetadata } from './evolunia-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia13WithReviewsServerKeywordPage />;
}
