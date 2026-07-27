import NilotReviewKeywordPage, { generateMetadata } from './nilot-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotReviewKeywordPage />;
}
