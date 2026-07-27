import EternalOdysseyReviewKeywordPage, { generateMetadata } from './eternal-odyssey-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyReviewKeywordPage />;
}
