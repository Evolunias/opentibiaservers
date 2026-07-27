import WithReviewsMediviaOtServerKeywordPage, { generateMetadata } from './with-reviews-medivia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaOtServerKeywordPage />;
}
