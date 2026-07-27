import ArchlightRealMapServerUsaKeywordPage, { generateMetadata } from './archlight-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightRealMapServerUsaKeywordPage />;
}
