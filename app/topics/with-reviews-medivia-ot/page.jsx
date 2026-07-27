import WithReviewsMediviaOtKeywordPage, { generateMetadata } from './with-reviews-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaOtKeywordPage />;
}
