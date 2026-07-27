import RealMapMiracleServersKeywordPage, { generateMetadata } from './real-map-miracle-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMiracleServersKeywordPage />;
}
