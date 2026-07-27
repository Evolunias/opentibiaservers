import RealMapOxygenotServersKeywordPage, { generateMetadata } from './real-map-oxygenot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOxygenotServersKeywordPage />;
}
