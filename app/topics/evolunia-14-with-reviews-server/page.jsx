import Evolunia14WithReviewsServerKeywordPage, { generateMetadata } from './evolunia-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia14WithReviewsServerKeywordPage />;
}
