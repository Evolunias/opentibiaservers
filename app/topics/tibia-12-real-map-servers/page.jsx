import Tibia12RealMapServersKeywordPage, { generateMetadata } from './tibia-12-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapServersKeywordPage />;
}
