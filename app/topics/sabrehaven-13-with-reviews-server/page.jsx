import Sabrehaven13WithReviewsServerKeywordPage, { generateMetadata } from './sabrehaven-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven13WithReviewsServerKeywordPage />;
}
