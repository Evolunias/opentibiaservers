import EternalOdysseyReviewsKeywordPage, { generateMetadata } from './eternal-odyssey-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyReviewsKeywordPage />;
}
