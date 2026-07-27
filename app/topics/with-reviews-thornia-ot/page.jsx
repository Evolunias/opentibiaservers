import WithReviewsThorniaOtKeywordPage, { generateMetadata } from './with-reviews-thornia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThorniaOtKeywordPage />;
}
