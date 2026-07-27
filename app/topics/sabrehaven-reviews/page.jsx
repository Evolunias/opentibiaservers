import SabrehavenReviewsKeywordPage, { generateMetadata } from './sabrehaven-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenReviewsKeywordPage />;
}
