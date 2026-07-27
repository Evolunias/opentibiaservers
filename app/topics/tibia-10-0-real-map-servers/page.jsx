import Tibia100RealMapServersKeywordPage, { generateMetadata } from './tibia-10-0-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RealMapServersKeywordPage />;
}
