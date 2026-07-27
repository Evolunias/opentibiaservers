import RealMapElderaServersKeywordPage, { generateMetadata } from './real-map-eldera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaServersKeywordPage />;
}
