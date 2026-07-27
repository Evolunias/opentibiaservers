import MediviaCustomMapServersEuropeKeywordPage, { generateMetadata } from './medivia-custom-map-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaCustomMapServersEuropeKeywordPage />;
}
