import Tibia81RealMapServersKeywordPage, { generateMetadata } from './tibia-8-1-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RealMapServersKeywordPage />;
}
