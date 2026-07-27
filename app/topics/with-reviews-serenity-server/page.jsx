import WithReviewsSerenityServerKeywordPage, { generateMetadata } from './with-reviews-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSerenityServerKeywordPage />;
}
