import BlazeraRealMapServerCanadaKeywordPage, { generateMetadata } from './blazera-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraRealMapServerCanadaKeywordPage />;
}
