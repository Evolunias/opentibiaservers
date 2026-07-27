import MediviaCustomMapServersBrazilKeywordPage, { generateMetadata } from './medivia-custom-map-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaCustomMapServersBrazilKeywordPage />;
}
