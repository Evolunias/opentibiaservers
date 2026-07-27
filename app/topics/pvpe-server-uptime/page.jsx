import PvpeServerUptimeKeywordPage, { generateMetadata } from './pvpe-server-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerUptimeKeywordPage />;
}
