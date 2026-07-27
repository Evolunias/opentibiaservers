import WithReviewsMistOfDeathWikiKeywordPage, { generateMetadata } from './with-reviews-mist-of-death-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMistOfDeathWikiKeywordPage />;
}
