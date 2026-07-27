import WithReviewsClassicusOtServerKeywordPage, { generateMetadata } from './with-reviews-classicus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusOtServerKeywordPage />;
}
