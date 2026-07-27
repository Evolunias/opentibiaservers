import Serenity12WithReviewsServerKeywordPage, { generateMetadata } from './serenity-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12WithReviewsServerKeywordPage />;
}
