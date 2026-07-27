import TibiaRealMapServerUptimeKeywordPage, { generateMetadata } from './tibia-real-map-server-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerUptimeKeywordPage />;
}
