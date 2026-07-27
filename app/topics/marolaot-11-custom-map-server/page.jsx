import Marolaot11CustomMapServerKeywordPage, { generateMetadata } from './marolaot-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot11CustomMapServerKeywordPage />;
}
