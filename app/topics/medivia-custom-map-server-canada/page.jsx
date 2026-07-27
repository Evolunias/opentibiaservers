import MediviaCustomMapServerCanadaKeywordPage, { generateMetadata } from './medivia-custom-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaCustomMapServerCanadaKeywordPage />;
}
