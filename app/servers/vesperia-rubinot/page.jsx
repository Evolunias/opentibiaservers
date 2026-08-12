import VesperiaRubinotServerReviewPage, { generateMetadata } from './vesperia-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VesperiaRubinotServerReviewPage />;
}
