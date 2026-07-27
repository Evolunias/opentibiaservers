import VenoreotReviewKeywordPage, { generateMetadata } from './venoreot-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotReviewKeywordPage />;
}
