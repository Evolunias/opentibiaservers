import RealMapMiracleKeywordPage, { generateMetadata } from './real-map-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMiracleKeywordPage />;
}
