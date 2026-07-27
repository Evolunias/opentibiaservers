import BlazeraCustomMapServerCanadaKeywordPage, { generateMetadata } from './blazera-custom-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraCustomMapServerCanadaKeywordPage />;
}
