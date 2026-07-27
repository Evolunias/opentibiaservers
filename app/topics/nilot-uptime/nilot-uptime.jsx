import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-uptime');
}

export default function NilotUptimeKeywordPage() {
  return <StaticKeywordPage slug="nilot-uptime" />;
}
