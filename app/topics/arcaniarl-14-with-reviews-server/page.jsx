import Arcaniarl14WithReviewsServerKeywordPage, { generateMetadata } from './arcaniarl-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl14WithReviewsServerKeywordPage />;
}
