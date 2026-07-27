import WithReviewsClassicusWikiKeywordPage, { generateMetadata } from './with-reviews-classicus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusWikiKeywordPage />;
}
