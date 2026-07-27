import Unline13WithReviewsServerKeywordPage, { generateMetadata } from './unline-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline13WithReviewsServerKeywordPage />;
}
