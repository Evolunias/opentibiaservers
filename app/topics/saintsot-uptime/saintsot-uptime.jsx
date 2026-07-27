import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-uptime');
}

export default function SaintsotUptimeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-uptime" />;
}
