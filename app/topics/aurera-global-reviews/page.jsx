import AureraGlobalReviewsKeywordPage, { generateMetadata } from './aurera-global-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalReviewsKeywordPage />;
}
