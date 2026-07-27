import WithReviewsNoxiousotServerKeywordPage, { generateMetadata } from './with-reviews-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNoxiousotServerKeywordPage />;
}
