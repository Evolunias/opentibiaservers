import Oldera71RealMapServerKeywordPage, { generateMetadata } from './oldera-7-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera71RealMapServerKeywordPage />;
}
