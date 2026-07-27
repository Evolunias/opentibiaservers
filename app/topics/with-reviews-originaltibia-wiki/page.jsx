import WithReviewsOriginaltibiaWikiKeywordPage, { generateMetadata } from './with-reviews-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOriginaltibiaWikiKeywordPage />;
}
