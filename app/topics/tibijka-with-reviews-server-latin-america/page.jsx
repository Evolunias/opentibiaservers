import TibijkaWithReviewsServerLatinAmericaKeywordPage, { generateMetadata } from './tibijka-with-reviews-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaWithReviewsServerLatinAmericaKeywordPage />;
}
