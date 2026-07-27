import Unline100WithReviewsServerKeywordPage, { generateMetadata } from './unline-10-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline100WithReviewsServerKeywordPage />;
}
