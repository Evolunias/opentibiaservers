import RubinotRealMapServerArgentinaKeywordPage, { generateMetadata } from './rubinot-real-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotRealMapServerArgentinaKeywordPage />;
}
