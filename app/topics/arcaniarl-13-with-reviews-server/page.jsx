import Arcaniarl13WithReviewsServerKeywordPage, { generateMetadata } from './arcaniarl-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl13WithReviewsServerKeywordPage />;
}
