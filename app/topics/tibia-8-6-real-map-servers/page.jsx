import Tibia86RealMapServersKeywordPage, { generateMetadata } from './tibia-8-6-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RealMapServersKeywordPage />;
}
