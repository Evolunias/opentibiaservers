import WithReviewsOriginaltibiaKeywordPage, { generateMetadata } from './with-reviews-originaltibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOriginaltibiaKeywordPage />;
}
