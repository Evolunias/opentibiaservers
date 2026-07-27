import TibiaOtServerUptimeKeywordPage, { generateMetadata } from './tibia-ot-server-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerUptimeKeywordPage />;
}
