import Tibia84RealMapServersKeywordPage, { generateMetadata } from './tibia-8-4-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RealMapServersKeywordPage />;
}
