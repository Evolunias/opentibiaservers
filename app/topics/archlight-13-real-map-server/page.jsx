import Archlight13RealMapServerKeywordPage, { generateMetadata } from './archlight-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13RealMapServerKeywordPage />;
}
