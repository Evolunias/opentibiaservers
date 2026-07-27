import Tibia71RealMapServersKeywordPage, { generateMetadata } from './tibia-7-1-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RealMapServersKeywordPage />;
}
