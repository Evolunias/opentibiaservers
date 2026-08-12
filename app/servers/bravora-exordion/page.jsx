import BravoraExordionServerReviewPage, { generateMetadata } from './bravora-exordion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BravoraExordionServerReviewPage />;
}
