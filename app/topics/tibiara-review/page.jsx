import TibiaraReviewKeywordPage, { generateMetadata } from './tibiara-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraReviewKeywordPage />;
}
