import WithReviewsSabrehavenGuideKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenGuideKeywordPage />;
}
