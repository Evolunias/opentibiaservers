import RealMapTibiaraServersKeywordPage, { generateMetadata } from './real-map-tibiara-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraServersKeywordPage />;
}
