import Tibia11CustomMapServersKeywordPage, { generateMetadata } from './tibia-11-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapServersKeywordPage />;
}
