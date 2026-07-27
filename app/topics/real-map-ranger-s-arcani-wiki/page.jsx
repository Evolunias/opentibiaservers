import RealMapRangerSArcaniWikiKeywordPage, { generateMetadata } from './real-map-ranger-s-arcani-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRangerSArcaniWikiKeywordPage />;
}
