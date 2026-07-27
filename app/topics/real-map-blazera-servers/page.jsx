import RealMapBlazeraServersKeywordPage, { generateMetadata } from './real-map-blazera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraServersKeywordPage />;
}
