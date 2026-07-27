import Saintsot12WithReviewsServerKeywordPage, { generateMetadata } from './saintsot-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot12WithReviewsServerKeywordPage />;
}
