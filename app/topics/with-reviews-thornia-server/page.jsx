import WithReviewsThorniaServerKeywordPage, { generateMetadata } from './with-reviews-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThorniaServerKeywordPage />;
}
