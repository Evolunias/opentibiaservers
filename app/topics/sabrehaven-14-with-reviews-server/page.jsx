import Sabrehaven14WithReviewsServerKeywordPage, { generateMetadata } from './sabrehaven-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven14WithReviewsServerKeywordPage />;
}
