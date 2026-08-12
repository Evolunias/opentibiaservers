import CastabraServerReviewPage, { generateMetadata } from './castabra';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CastabraServerReviewPage />;
}
