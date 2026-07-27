import WithReviewsThorniaKeywordPage, { generateMetadata } from './with-reviews-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThorniaKeywordPage />;
}
