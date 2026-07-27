import BlazeraCustomMapServerEuropeKeywordPage, { generateMetadata } from './blazera-custom-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraCustomMapServerEuropeKeywordPage />;
}
