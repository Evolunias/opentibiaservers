import OlderaWithReviewsServerLatinAmericaKeywordPage, { generateMetadata } from './oldera-with-reviews-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaWithReviewsServerLatinAmericaKeywordPage />;
}
