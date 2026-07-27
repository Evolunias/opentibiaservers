import WithReviewsOriginaltibiaServerKeywordPage, { generateMetadata } from './with-reviews-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOriginaltibiaServerKeywordPage />;
}
