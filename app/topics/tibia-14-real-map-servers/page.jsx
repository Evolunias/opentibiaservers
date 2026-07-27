import Tibia14RealMapServersKeywordPage, { generateMetadata } from './tibia-14-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapServersKeywordPage />;
}
