import TibiaraWithReviewsServerLatinAmericaKeywordPage, { generateMetadata } from './tibiara-with-reviews-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraWithReviewsServerLatinAmericaKeywordPage />;
}
