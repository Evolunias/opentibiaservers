import Oxygenot12WithReviewsServerKeywordPage, { generateMetadata } from './oxygenot-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot12WithReviewsServerKeywordPage />;
}
