import Thornia13RealMapServersKeywordPage, { generateMetadata } from './thornia-13-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13RealMapServersKeywordPage />;
}
