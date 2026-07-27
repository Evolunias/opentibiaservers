import BlazeraCustomMapServersNorthAmericaKeywordPage, { generateMetadata } from './blazera-custom-map-servers-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraCustomMapServersNorthAmericaKeywordPage />;
}
