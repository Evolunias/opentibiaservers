import WithReviewsNoxiousotLoginKeywordPage, { generateMetadata } from './with-reviews-noxiousot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNoxiousotLoginKeywordPage />;
}
