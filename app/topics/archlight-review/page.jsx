import ArchlightReviewKeywordPage, { generateMetadata } from './archlight-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightReviewKeywordPage />;
}
