import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-uptime');
}

export default function ClassicusUptimeKeywordPage() {
  return <StaticKeywordPage slug="classicus-uptime" />;
}
