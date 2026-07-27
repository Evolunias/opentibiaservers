import Thornia15RealMapServersKeywordPage, { generateMetadata } from './thornia-15-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15RealMapServersKeywordPage />;
}
