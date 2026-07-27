import Sabrehaven71WithReviewsServerKeywordPage, { generateMetadata } from './sabrehaven-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven71WithReviewsServerKeywordPage />;
}
