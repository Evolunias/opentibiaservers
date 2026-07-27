import TibiaoriginsReviewKeywordPage, { generateMetadata } from './tibiaorigins-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsReviewKeywordPage />;
}
