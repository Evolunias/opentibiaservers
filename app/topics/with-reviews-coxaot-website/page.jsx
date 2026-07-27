import WithReviewsCoxaotWebsiteKeywordPage, { generateMetadata } from './with-reviews-coxaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCoxaotWebsiteKeywordPage />;
}
