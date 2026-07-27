import OxygenotReviewKeywordPage, { generateMetadata } from './oxygenot-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotReviewKeywordPage />;
}
