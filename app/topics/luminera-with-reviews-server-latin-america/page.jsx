import LumineraWithReviewsServerLatinAmericaKeywordPage, { generateMetadata } from './luminera-with-reviews-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraWithReviewsServerLatinAmericaKeywordPage />;
}
