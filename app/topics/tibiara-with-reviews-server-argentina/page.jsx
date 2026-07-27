import TibiaraWithReviewsServerArgentinaKeywordPage, { generateMetadata } from './tibiara-with-reviews-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraWithReviewsServerArgentinaKeywordPage />;
}
