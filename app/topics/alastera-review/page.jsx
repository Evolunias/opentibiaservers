import AlasteraReviewKeywordPage, { generateMetadata } from './alastera-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraReviewKeywordPage />;
}
