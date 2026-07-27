import RuthlessChaosReviewKeywordPage, { generateMetadata } from './ruthless-chaos-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosReviewKeywordPage />;
}
