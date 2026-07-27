import RealMapOxygenotServerKeywordPage, { generateMetadata } from './real-map-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOxygenotServerKeywordPage />;
}
