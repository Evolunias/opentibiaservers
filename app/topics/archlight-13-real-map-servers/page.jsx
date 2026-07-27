import Archlight13RealMapServersKeywordPage, { generateMetadata } from './archlight-13-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13RealMapServersKeywordPage />;
}
