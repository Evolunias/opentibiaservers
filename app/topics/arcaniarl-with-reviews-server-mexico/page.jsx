import ArcaniarlWithReviewsServerMexicoKeywordPage, { generateMetadata } from './arcaniarl-with-reviews-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlWithReviewsServerMexicoKeywordPage />;
}
