import Tibia1098ServerUptimeKeywordPage, { generateMetadata } from './tibia-10-98-server-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerUptimeKeywordPage />;
}
