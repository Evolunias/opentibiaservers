import PvpReviewArgentinaKeywordPage, { generateMetadata } from './pvp-review-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpReviewArgentinaKeywordPage />;
}
