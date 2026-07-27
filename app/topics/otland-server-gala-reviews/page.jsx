import OtlandServerGalaReviewsKeywordPage, { generateMetadata } from './otland-server-gala-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaReviewsKeywordPage />;
}
