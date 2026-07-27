import RealMapRealestaServersKeywordPage, { generateMetadata } from './real-map-realesta-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRealestaServersKeywordPage />;
}
