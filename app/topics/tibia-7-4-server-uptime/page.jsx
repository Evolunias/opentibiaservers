import Tibia74ServerUptimeKeywordPage, { generateMetadata } from './tibia-7-4-server-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerUptimeKeywordPage />;
}
