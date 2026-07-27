import Tibia81CustomMapServersKeywordPage, { generateMetadata } from './tibia-8-1-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81CustomMapServersKeywordPage />;
}
