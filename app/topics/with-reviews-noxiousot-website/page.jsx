import WithReviewsNoxiousotWebsiteKeywordPage, { generateMetadata } from './with-reviews-noxiousot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNoxiousotWebsiteKeywordPage />;
}
