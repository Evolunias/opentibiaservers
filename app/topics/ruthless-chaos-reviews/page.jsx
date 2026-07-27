import RuthlessChaosReviewsKeywordPage, { generateMetadata } from './ruthless-chaos-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosReviewsKeywordPage />;
}
