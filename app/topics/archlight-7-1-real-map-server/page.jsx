import Archlight71RealMapServerKeywordPage, { generateMetadata } from './archlight-7-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight71RealMapServerKeywordPage />;
}
