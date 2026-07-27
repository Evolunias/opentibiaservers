import WithReviewsSerenityOtServerKeywordPage, { generateMetadata } from './with-reviews-serenity-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSerenityOtServerKeywordPage />;
}
