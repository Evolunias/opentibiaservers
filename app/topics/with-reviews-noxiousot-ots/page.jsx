import WithReviewsNoxiousotOtsKeywordPage, { generateMetadata } from './with-reviews-noxiousot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNoxiousotOtsKeywordPage />;
}
