import WithReviewsClassicusOtKeywordPage, { generateMetadata } from './with-reviews-classicus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusOtKeywordPage />;
}
