import Serenity74WithReviewsServerKeywordPage, { generateMetadata } from './serenity-7-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity74WithReviewsServerKeywordPage />;
}
