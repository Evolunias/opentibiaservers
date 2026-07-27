import Thornia14RealMapServerKeywordPage, { generateMetadata } from './thornia-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14RealMapServerKeywordPage />;
}
