import WithReviewsTibiameOtServerKeywordPage, { generateMetadata } from './with-reviews-tibiame-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiameOtServerKeywordPage />;
}
