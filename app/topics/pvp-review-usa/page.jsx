import PvpReviewUsaKeywordPage, { generateMetadata } from './pvp-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpReviewUsaKeywordPage />;
}
