import Tibia11RealMapServersKeywordPage, { generateMetadata } from './tibia-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapServersKeywordPage />;
}
