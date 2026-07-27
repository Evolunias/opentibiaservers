import Serenity71WithReviewsServerKeywordPage, { generateMetadata } from './serenity-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity71WithReviewsServerKeywordPage />;
}
