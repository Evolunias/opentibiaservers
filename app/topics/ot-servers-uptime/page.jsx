import OtServersUptimeKeywordPage, { generateMetadata } from './ot-servers-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersUptimeKeywordPage />;
}
