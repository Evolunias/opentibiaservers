import BlazeraRealMapServerSwedenKeywordPage, { generateMetadata } from './blazera-real-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraRealMapServerSwedenKeywordPage />;
}
