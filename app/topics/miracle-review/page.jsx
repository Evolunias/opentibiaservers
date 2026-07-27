import MiracleReviewKeywordPage, { generateMetadata } from './miracle-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleReviewKeywordPage />;
}
