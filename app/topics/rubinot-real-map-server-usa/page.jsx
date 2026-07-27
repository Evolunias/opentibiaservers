import RubinotRealMapServerUsaKeywordPage, { generateMetadata } from './rubinot-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotRealMapServerUsaKeywordPage />;
}
