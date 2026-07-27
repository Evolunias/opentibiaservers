import Noxiousot11RealMapServerKeywordPage, { generateMetadata } from './noxiousot-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Noxiousot11RealMapServerKeywordPage />;
}
