import InfernalOt15WithReviewsServerKeywordPage, { generateMetadata } from './infernal-ot-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOt15WithReviewsServerKeywordPage />;
}
