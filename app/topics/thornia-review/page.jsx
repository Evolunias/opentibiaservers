import ThorniaReviewKeywordPage, { generateMetadata } from './thornia-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaReviewKeywordPage />;
}
