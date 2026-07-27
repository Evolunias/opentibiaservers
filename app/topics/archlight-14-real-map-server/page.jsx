import Archlight14RealMapServerKeywordPage, { generateMetadata } from './archlight-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight14RealMapServerKeywordPage />;
}
