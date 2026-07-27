import PvpReviewMexicoKeywordPage, { generateMetadata } from './pvp-review-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpReviewMexicoKeywordPage />;
}
