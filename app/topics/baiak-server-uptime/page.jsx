import BaiakServerUptimeKeywordPage, { generateMetadata } from './baiak-server-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerUptimeKeywordPage />;
}
