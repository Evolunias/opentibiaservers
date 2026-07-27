import PvpReviewLatinAmericaKeywordPage, { generateMetadata } from './pvp-review-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpReviewLatinAmericaKeywordPage />;
}
