import RealMapAmeriaServersKeywordPage, { generateMetadata } from './real-map-ameria-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaServersKeywordPage />;
}
