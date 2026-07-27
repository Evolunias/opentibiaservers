import RealMapArcaniarlWebsiteKeywordPage, { generateMetadata } from './real-map-arcaniarl-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlWebsiteKeywordPage />;
}
