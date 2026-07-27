import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-uptime');
}

export default function ImperianicUptimeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-uptime" />;
}
