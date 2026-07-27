import WithReviewsHarmoniaOtWikiKeywordPage, { generateMetadata } from './with-reviews-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsHarmoniaOtWikiKeywordPage />;
}
