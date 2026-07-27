import Tibia84CustomMapServersKeywordPage, { generateMetadata } from './tibia-8-4-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84CustomMapServersKeywordPage />;
}
