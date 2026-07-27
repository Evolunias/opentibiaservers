import ArcaniarlReviewKeywordPage, { generateMetadata } from './arcaniarl-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlReviewKeywordPage />;
}
