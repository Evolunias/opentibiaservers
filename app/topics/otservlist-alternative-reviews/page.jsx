import OtservlistAlternativeReviewsKeywordPage, { generateMetadata } from './otservlist-alternative-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeReviewsKeywordPage />;
}
