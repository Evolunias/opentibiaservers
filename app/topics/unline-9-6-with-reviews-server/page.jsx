import Unline96WithReviewsServerKeywordPage, { generateMetadata } from './unline-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline96WithReviewsServerKeywordPage />;
}
