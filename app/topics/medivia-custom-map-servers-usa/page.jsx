import MediviaCustomMapServersUsaKeywordPage, { generateMetadata } from './medivia-custom-map-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaCustomMapServersUsaKeywordPage />;
}
