import RealMapThaisotServersKeywordPage, { generateMetadata } from './real-map-thaisot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotServersKeywordPage />;
}
