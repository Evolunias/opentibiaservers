import RealMapOlderaServersKeywordPage, { generateMetadata } from './real-map-oldera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaServersKeywordPage />;
}
