import Unline11WithReviewsServerKeywordPage, { generateMetadata } from './unline-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline11WithReviewsServerKeywordPage />;
}
