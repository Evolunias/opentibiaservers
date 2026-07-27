import BlazeraCustomMapServersLatinAmericaKeywordPage, { generateMetadata } from './blazera-custom-map-servers-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraCustomMapServersLatinAmericaKeywordPage />;
}
