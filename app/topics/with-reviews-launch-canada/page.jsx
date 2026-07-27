import WithReviewsLaunchCanadaKeywordPage, { generateMetadata } from './with-reviews-launch-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLaunchCanadaKeywordPage />;
}
