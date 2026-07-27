import Serenity11WithReviewsServerKeywordPage, { generateMetadata } from './serenity-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11WithReviewsServerKeywordPage />;
}
