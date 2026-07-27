import Marolaot14RealMapServerKeywordPage, { generateMetadata } from './marolaot-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot14RealMapServerKeywordPage />;
}
