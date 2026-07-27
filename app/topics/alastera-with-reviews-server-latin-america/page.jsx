import AlasteraWithReviewsServerLatinAmericaKeywordPage, { generateMetadata } from './alastera-with-reviews-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraWithReviewsServerLatinAmericaKeywordPage />;
}
