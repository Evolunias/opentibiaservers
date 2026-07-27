import WithReviewsRuthlessChaosServerKeywordPage, { generateMetadata } from './with-reviews-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRuthlessChaosServerKeywordPage />;
}
