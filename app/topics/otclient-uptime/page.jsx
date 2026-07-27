import OtclientUptimeKeywordPage, { generateMetadata } from './otclient-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtclientUptimeKeywordPage />;
}
