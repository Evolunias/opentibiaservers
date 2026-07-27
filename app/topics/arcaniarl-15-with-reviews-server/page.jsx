import Arcaniarl15WithReviewsServerKeywordPage, { generateMetadata } from './arcaniarl-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl15WithReviewsServerKeywordPage />;
}
