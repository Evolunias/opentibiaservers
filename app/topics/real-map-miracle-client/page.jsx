import RealMapMiracleClientKeywordPage, { generateMetadata } from './real-map-miracle-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMiracleClientKeywordPage />;
}
