import Marolaot13RealMapServerKeywordPage, { generateMetadata } from './marolaot-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot13RealMapServerKeywordPage />;
}
