import WithReviewsMediviaWikiKeywordPage, { generateMetadata } from './with-reviews-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaWikiKeywordPage />;
}
