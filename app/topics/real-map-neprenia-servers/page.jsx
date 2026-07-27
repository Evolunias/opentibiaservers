import RealMapNepreniaServersKeywordPage, { generateMetadata } from './real-map-neprenia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaServersKeywordPage />;
}
