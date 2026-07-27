import RealMapRangerSArcaniKeywordPage, { generateMetadata } from './real-map-ranger-s-arcani';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRangerSArcaniKeywordPage />;
}
