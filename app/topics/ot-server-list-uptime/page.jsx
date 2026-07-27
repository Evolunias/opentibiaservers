import OtServerListUptimeKeywordPage, { generateMetadata } from './ot-server-list-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListUptimeKeywordPage />;
}
