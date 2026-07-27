import Tibia71CustomMapServersKeywordPage, { generateMetadata } from './tibia-7-1-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71CustomMapServersKeywordPage />;
}
