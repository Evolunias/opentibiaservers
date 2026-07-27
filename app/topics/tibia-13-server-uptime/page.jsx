import Tibia13ServerUptimeKeywordPage, { generateMetadata } from './tibia-13-server-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerUptimeKeywordPage />;
}
