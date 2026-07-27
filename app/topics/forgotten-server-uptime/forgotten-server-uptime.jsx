import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-uptime');
}

export default function ForgottenServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-uptime" />;
}
