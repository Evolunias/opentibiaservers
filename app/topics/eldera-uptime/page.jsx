import ElderaUptimeKeywordPage, { generateMetadata } from './eldera-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaUptimeKeywordPage />;
}
