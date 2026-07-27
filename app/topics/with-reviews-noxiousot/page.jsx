import WithReviewsNoxiousotKeywordPage, { generateMetadata } from './with-reviews-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNoxiousotKeywordPage />;
}
