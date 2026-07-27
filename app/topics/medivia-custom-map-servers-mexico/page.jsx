import MediviaCustomMapServersMexicoKeywordPage, { generateMetadata } from './medivia-custom-map-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaCustomMapServersMexicoKeywordPage />;
}
