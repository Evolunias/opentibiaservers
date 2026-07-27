import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-uptime');
}

export default function ClassickDrakoriaUptimeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-uptime" />;
}
