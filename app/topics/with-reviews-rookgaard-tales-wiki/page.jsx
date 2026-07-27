import WithReviewsRookgaardTalesWikiKeywordPage, { generateMetadata } from './with-reviews-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRookgaardTalesWikiKeywordPage />;
}
