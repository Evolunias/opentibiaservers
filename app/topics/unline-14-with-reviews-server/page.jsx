import Unline14WithReviewsServerKeywordPage, { generateMetadata } from './unline-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline14WithReviewsServerKeywordPage />;
}
