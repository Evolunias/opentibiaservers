import Archlight12RealMapServerKeywordPage, { generateMetadata } from './archlight-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12RealMapServerKeywordPage />;
}
