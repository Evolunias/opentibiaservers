import RealMapMarolaotWikiKeywordPage, { generateMetadata } from './real-map-marolaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMarolaotWikiKeywordPage />;
}
