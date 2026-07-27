import Oldera11RealMapServerKeywordPage, { generateMetadata } from './oldera-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11RealMapServerKeywordPage />;
}
