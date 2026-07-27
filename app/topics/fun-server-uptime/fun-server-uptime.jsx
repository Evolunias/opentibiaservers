import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-uptime');
}

export default function FunServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="fun-server-uptime" />;
}
