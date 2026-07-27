import WithReviewsThaisotWikiKeywordPage, { generateMetadata } from './with-reviews-thaisot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotWikiKeywordPage />;
}
