import OriginaltibiaRealMapServerUsaKeywordPage, { generateMetadata } from './originaltibia-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaRealMapServerUsaKeywordPage />;
}
