import WithReviewsBaiakIlusionWikiKeywordPage, { generateMetadata } from './with-reviews-baiak-ilusion-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBaiakIlusionWikiKeywordPage />;
}
