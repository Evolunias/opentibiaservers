import Archlight80RealMapServerKeywordPage, { generateMetadata } from './archlight-8-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight80RealMapServerKeywordPage />;
}
