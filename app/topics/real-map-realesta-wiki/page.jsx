import RealMapRealestaWikiKeywordPage, { generateMetadata } from './real-map-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRealestaWikiKeywordPage />;
}
