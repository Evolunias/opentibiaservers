import MediviaCustomMapServerArgentinaKeywordPage, { generateMetadata } from './medivia-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaCustomMapServerArgentinaKeywordPage />;
}
