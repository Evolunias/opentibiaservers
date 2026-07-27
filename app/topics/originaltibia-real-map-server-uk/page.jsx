import OriginaltibiaRealMapServerUkKeywordPage, { generateMetadata } from './originaltibia-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaRealMapServerUkKeywordPage />;
}
