import Realesta12RealMapServerKeywordPage, { generateMetadata } from './realesta-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta12RealMapServerKeywordPage />;
}
