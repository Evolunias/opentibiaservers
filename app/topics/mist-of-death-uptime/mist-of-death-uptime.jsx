import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-uptime');
}

export default function MistOfDeathUptimeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-uptime" />;
}
