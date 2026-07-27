import WithReviewsTibiameOtKeywordPage, { generateMetadata } from './with-reviews-tibiame-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiameOtKeywordPage />;
}
