import WithReviewsDuraOnlineWikiKeywordPage, { generateMetadata } from './with-reviews-dura-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDuraOnlineWikiKeywordPage />;
}
