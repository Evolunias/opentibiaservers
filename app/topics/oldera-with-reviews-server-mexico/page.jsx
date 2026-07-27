import OlderaWithReviewsServerMexicoKeywordPage, { generateMetadata } from './oldera-with-reviews-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaWithReviewsServerMexicoKeywordPage />;
}
