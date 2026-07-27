import RealMapLumineraServersKeywordPage, { generateMetadata } from './real-map-luminera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraServersKeywordPage />;
}
