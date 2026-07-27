import Oldera12RealMapServerKeywordPage, { generateMetadata } from './oldera-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12RealMapServerKeywordPage />;
}
