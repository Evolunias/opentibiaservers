import AuroriaRubinotServerReviewPage, { generateMetadata } from './auroria-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AuroriaRubinotServerReviewPage />;
}
