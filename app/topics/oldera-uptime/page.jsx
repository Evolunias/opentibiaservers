import OlderaUptimeKeywordPage, { generateMetadata } from './oldera-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaUptimeKeywordPage />;
}
