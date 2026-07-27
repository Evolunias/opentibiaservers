import WithReviewsThorniaOtServerKeywordPage, { generateMetadata } from './with-reviews-thornia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThorniaOtServerKeywordPage />;
}
