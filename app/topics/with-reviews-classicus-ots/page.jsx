import WithReviewsClassicusOtsKeywordPage, { generateMetadata } from './with-reviews-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusOtsKeywordPage />;
}
