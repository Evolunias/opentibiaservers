import RealMapTibianusWikiKeywordPage, { generateMetadata } from './real-map-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibianusWikiKeywordPage />;
}
