import OriginaltibiaUptimeKeywordPage, { generateMetadata } from './originaltibia-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaUptimeKeywordPage />;
}
