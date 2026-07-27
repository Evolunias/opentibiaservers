import WithReviewsMediviaKeywordPage, { generateMetadata } from './with-reviews-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaKeywordPage />;
}
