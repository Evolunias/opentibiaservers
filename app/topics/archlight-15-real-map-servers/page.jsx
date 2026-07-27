import Archlight15RealMapServersKeywordPage, { generateMetadata } from './archlight-15-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15RealMapServersKeywordPage />;
}
