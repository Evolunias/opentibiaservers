import NarutoTheShinobiWarServerReviewPage, { generateMetadata } from './naruto-the-shinobi-war';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NarutoTheShinobiWarServerReviewPage />;
}
