import RealMapKasteriaServersKeywordPage, { generateMetadata } from './real-map-kasteria-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaServersKeywordPage />;
}
