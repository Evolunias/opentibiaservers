import TibiaraWithReviewsServerMexicoKeywordPage, { generateMetadata } from './tibiara-with-reviews-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraWithReviewsServerMexicoKeywordPage />;
}
