import WithReviewsMediviaOfficialKeywordPage, { generateMetadata } from './with-reviews-medivia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaOfficialKeywordPage />;
}
