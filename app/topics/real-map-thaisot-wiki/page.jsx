import RealMapThaisotWikiKeywordPage, { generateMetadata } from './real-map-thaisot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotWikiKeywordPage />;
}
