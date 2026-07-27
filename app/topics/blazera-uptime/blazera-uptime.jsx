import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-uptime');
}

export default function BlazeraUptimeKeywordPage() {
  return <StaticKeywordPage slug="blazera-uptime" />;
}
