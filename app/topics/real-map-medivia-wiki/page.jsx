import RealMapMediviaWikiKeywordPage, { generateMetadata } from './real-map-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaWikiKeywordPage />;
}
