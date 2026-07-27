import NoResetReviewFranceKeywordPage, { generateMetadata } from './no-reset-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetReviewFranceKeywordPage />;
}
