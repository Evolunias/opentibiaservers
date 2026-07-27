import MarolaotRealMapServersSwedenKeywordPage, { generateMetadata } from './marolaot-real-map-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotRealMapServersSwedenKeywordPage />;
}
