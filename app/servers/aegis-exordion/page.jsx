import AegisExordionServerReviewPage, { generateMetadata } from './aegis-exordion';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AegisExordionServerReviewPage />;
}
