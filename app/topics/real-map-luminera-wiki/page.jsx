import RealMapLumineraWikiKeywordPage, { generateMetadata } from './real-map-luminera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraWikiKeywordPage />;
}
