import SolarianRubinotServerReviewPage, { generateMetadata } from './solarian-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SolarianRubinotServerReviewPage />;
}
