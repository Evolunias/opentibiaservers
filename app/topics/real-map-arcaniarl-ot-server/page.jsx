import RealMapArcaniarlOtServerKeywordPage, { generateMetadata } from './real-map-arcaniarl-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlOtServerKeywordPage />;
}
