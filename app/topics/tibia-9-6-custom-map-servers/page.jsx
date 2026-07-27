import Tibia96CustomMapServersKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapServersKeywordPage />;
}
