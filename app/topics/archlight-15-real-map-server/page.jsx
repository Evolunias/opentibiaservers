import Archlight15RealMapServerKeywordPage, { generateMetadata } from './archlight-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15RealMapServerKeywordPage />;
}
