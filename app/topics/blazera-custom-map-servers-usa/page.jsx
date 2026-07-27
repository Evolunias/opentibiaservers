import BlazeraCustomMapServersUsaKeywordPage, { generateMetadata } from './blazera-custom-map-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraCustomMapServersUsaKeywordPage />;
}
