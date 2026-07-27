import Archlight11RealMapServerKeywordPage, { generateMetadata } from './archlight-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11RealMapServerKeywordPage />;
}
