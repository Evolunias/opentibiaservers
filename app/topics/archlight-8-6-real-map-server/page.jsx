import Archlight86RealMapServerKeywordPage, { generateMetadata } from './archlight-8-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight86RealMapServerKeywordPage />;
}
