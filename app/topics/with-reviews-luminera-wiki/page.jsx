import WithReviewsLumineraWikiKeywordPage, { generateMetadata } from './with-reviews-luminera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraWikiKeywordPage />;
}
