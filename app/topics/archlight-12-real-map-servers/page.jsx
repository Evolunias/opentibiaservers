import Archlight12RealMapServersKeywordPage, { generateMetadata } from './archlight-12-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12RealMapServersKeywordPage />;
}
