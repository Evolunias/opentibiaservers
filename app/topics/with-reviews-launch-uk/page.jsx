import WithReviewsLaunchUkKeywordPage, { generateMetadata } from './with-reviews-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLaunchUkKeywordPage />;
}
