import Classicus15RealMapServersKeywordPage, { generateMetadata } from './classicus-15-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15RealMapServersKeywordPage />;
}
