import TibiaRealMapServerArgentinaKeywordPage, { generateMetadata } from './tibia-real-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerArgentinaKeywordPage />;
}
