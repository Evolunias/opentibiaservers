import Tibia15RealMapServersKeywordPage, { generateMetadata } from './tibia-15-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapServersKeywordPage />;
}
