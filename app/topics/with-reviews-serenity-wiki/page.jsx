import WithReviewsSerenityWikiKeywordPage, { generateMetadata } from './with-reviews-serenity-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSerenityWikiKeywordPage />;
}
