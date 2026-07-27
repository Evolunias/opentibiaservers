import Thornia11RealMapServersKeywordPage, { generateMetadata } from './thornia-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11RealMapServersKeywordPage />;
}
