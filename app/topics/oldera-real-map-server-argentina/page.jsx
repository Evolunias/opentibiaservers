import OlderaRealMapServerArgentinaKeywordPage, { generateMetadata } from './oldera-real-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaRealMapServerArgentinaKeywordPage />;
}
