import Sabrehaven96WithReviewsServerKeywordPage, { generateMetadata } from './sabrehaven-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven96WithReviewsServerKeywordPage />;
}
