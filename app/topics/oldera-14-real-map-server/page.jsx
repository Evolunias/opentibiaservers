import Oldera14RealMapServerKeywordPage, { generateMetadata } from './oldera-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera14RealMapServerKeywordPage />;
}
