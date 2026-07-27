import RealMapMiracleServerKeywordPage, { generateMetadata } from './real-map-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMiracleServerKeywordPage />;
}
