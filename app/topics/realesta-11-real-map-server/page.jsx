import Realesta11RealMapServerKeywordPage, { generateMetadata } from './realesta-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta11RealMapServerKeywordPage />;
}
