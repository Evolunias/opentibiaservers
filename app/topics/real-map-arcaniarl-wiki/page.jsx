import RealMapArcaniarlWikiKeywordPage, { generateMetadata } from './real-map-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlWikiKeywordPage />;
}
