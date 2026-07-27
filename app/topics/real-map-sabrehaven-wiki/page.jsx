import RealMapSabrehavenWikiKeywordPage, { generateMetadata } from './real-map-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenWikiKeywordPage />;
}
