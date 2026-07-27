import Archlight12WithReviewsServerKeywordPage, { generateMetadata } from './archlight-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12WithReviewsServerKeywordPage />;
}
