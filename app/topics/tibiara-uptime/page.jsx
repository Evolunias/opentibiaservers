import TibiaraUptimeKeywordPage, { generateMetadata } from './tibiara-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraUptimeKeywordPage />;
}
