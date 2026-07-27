import TibiaCustomServerUptimeKeywordPage, { generateMetadata } from './tibia-custom-server-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerUptimeKeywordPage />;
}
