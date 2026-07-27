import Tibia14CustomMapServersKeywordPage, { generateMetadata } from './tibia-14-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapServersKeywordPage />;
}
