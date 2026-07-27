import Archlight11RealMapServersKeywordPage, { generateMetadata } from './archlight-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11RealMapServersKeywordPage />;
}
