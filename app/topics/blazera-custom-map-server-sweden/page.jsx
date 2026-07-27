import BlazeraCustomMapServerSwedenKeywordPage, { generateMetadata } from './blazera-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraCustomMapServerSwedenKeywordPage />;
}
