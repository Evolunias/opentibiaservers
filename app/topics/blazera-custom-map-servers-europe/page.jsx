import BlazeraCustomMapServersEuropeKeywordPage, { generateMetadata } from './blazera-custom-map-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraCustomMapServersEuropeKeywordPage />;
}
