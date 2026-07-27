import Arcaniarl11WithReviewsServerKeywordPage, { generateMetadata } from './arcaniarl-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl11WithReviewsServerKeywordPage />;
}
