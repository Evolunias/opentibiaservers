import OlderaWithReviewsServerCanadaKeywordPage, { generateMetadata } from './oldera-with-reviews-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaWithReviewsServerCanadaKeywordPage />;
}
