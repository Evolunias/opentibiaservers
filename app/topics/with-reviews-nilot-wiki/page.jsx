import WithReviewsNilotWikiKeywordPage, { generateMetadata } from './with-reviews-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNilotWikiKeywordPage />;
}
