import Oldera80RealMapServerKeywordPage, { generateMetadata } from './oldera-8-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera80RealMapServerKeywordPage />;
}
