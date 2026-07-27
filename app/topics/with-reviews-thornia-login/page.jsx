import WithReviewsThorniaLoginKeywordPage, { generateMetadata } from './with-reviews-thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThorniaLoginKeywordPage />;
}
