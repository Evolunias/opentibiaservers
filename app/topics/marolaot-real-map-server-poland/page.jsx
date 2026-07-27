import MarolaotRealMapServerPolandKeywordPage, { generateMetadata } from './marolaot-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotRealMapServerPolandKeywordPage />;
}
