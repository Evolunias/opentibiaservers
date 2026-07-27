import ArcaniarlReviewsKeywordPage, { generateMetadata } from './arcaniarl-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlReviewsKeywordPage />;
}
