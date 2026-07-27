import WithReviewsLaunchUsaKeywordPage, { generateMetadata } from './with-reviews-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLaunchUsaKeywordPage />;
}
