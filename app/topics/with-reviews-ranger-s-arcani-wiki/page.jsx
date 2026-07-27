import WithReviewsRangerSArcaniWikiKeywordPage, { generateMetadata } from './with-reviews-ranger-s-arcani-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRangerSArcaniWikiKeywordPage />;
}
