import ExordionServerReviewPage, { generateMetadata } from './exordion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ExordionServerReviewPage />;
}
