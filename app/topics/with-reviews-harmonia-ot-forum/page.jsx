import WithReviewsHarmoniaOtForumKeywordPage, { generateMetadata } from './with-reviews-harmonia-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsHarmoniaOtForumKeywordPage />;
}
