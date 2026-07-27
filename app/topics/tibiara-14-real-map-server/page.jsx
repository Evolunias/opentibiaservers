import Tibiara14RealMapServerKeywordPage, { generateMetadata } from './tibiara-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara14RealMapServerKeywordPage />;
}
