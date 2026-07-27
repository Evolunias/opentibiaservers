import WithReviewsLaunchEuropeKeywordPage, { generateMetadata } from './with-reviews-launch-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLaunchEuropeKeywordPage />;
}
