import Tibiara11RealMapServerKeywordPage, { generateMetadata } from './tibiara-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara11RealMapServerKeywordPage />;
}
