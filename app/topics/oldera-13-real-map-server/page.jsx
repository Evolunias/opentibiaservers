import Oldera13RealMapServerKeywordPage, { generateMetadata } from './oldera-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13RealMapServerKeywordPage />;
}
