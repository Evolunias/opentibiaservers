import WithReviewsBlazeraWikiKeywordPage, { generateMetadata } from './with-reviews-blazera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraWikiKeywordPage />;
}
