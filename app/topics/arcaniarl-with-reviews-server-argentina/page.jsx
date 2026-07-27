import ArcaniarlWithReviewsServerArgentinaKeywordPage, { generateMetadata } from './arcaniarl-with-reviews-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlWithReviewsServerArgentinaKeywordPage />;
}
