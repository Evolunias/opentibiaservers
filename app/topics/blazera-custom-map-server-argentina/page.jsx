import BlazeraCustomMapServerArgentinaKeywordPage, { generateMetadata } from './blazera-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraCustomMapServerArgentinaKeywordPage />;
}
