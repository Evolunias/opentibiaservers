import BelariaRubinotServerReviewPage, { generateMetadata } from './belaria-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BelariaRubinotServerReviewPage />;
}
