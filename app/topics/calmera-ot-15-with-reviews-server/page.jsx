import CalmeraOt15WithReviewsServerKeywordPage, { generateMetadata } from './calmera-ot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOt15WithReviewsServerKeywordPage />;
}
