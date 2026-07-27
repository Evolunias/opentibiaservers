import TibiaraRealMapServersCanadaKeywordPage, { generateMetadata } from './tibiara-real-map-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRealMapServersCanadaKeywordPage />;
}
