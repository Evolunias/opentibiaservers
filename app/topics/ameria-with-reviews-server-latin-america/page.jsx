import AmeriaWithReviewsServerLatinAmericaKeywordPage, { generateMetadata } from './ameria-with-reviews-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaWithReviewsServerLatinAmericaKeywordPage />;
}
