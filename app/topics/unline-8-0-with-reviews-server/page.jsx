import Unline80WithReviewsServerKeywordPage, { generateMetadata } from './unline-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline80WithReviewsServerKeywordPage />;
}
