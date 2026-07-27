import ArchlightRealMapServerUkKeywordPage, { generateMetadata } from './archlight-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightRealMapServerUkKeywordPage />;
}
