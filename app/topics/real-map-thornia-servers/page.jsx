import RealMapThorniaServersKeywordPage, { generateMetadata } from './real-map-thornia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaServersKeywordPage />;
}
