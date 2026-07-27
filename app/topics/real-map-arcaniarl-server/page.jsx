import RealMapArcaniarlServerKeywordPage, { generateMetadata } from './real-map-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlServerKeywordPage />;
}
