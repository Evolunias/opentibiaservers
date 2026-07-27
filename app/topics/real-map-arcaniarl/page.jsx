import RealMapArcaniarlKeywordPage, { generateMetadata } from './real-map-arcaniarl';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlKeywordPage />;
}
