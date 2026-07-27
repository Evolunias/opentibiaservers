import WithReviewsArcaniarlWikiKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlWikiKeywordPage />;
}
