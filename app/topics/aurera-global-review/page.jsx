import AureraGlobalReviewKeywordPage, { generateMetadata } from './aurera-global-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalReviewKeywordPage />;
}
