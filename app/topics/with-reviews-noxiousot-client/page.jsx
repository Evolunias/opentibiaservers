import WithReviewsNoxiousotClientKeywordPage, { generateMetadata } from './with-reviews-noxiousot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNoxiousotClientKeywordPage />;
}
