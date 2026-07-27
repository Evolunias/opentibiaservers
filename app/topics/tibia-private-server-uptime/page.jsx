import TibiaPrivateServerUptimeKeywordPage, { generateMetadata } from './tibia-private-server-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerUptimeKeywordPage />;
}
