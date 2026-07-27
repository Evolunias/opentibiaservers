import Tibia13RealMapServersKeywordPage, { generateMetadata } from './tibia-13-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapServersKeywordPage />;
}
