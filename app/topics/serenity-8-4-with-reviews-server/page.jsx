import Serenity84WithReviewsServerKeywordPage, { generateMetadata } from './serenity-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity84WithReviewsServerKeywordPage />;
}
