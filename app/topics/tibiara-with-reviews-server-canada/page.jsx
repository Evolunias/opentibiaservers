import TibiaraWithReviewsServerCanadaKeywordPage, { generateMetadata } from './tibiara-with-reviews-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraWithReviewsServerCanadaKeywordPage />;
}
