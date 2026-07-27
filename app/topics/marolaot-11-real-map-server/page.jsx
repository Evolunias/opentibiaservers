import Marolaot11RealMapServerKeywordPage, { generateMetadata } from './marolaot-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot11RealMapServerKeywordPage />;
}
