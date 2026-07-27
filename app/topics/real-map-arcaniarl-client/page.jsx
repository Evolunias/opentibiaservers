import RealMapArcaniarlClientKeywordPage, { generateMetadata } from './real-map-arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlClientKeywordPage />;
}
