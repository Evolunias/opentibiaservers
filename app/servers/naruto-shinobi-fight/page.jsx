import NarutoShinobiFightServerReviewPage, { generateMetadata } from './naruto-shinobi-fight';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NarutoShinobiFightServerReviewPage />;
}
