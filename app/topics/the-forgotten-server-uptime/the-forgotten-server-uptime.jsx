import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-uptime');
}

export default function TheForgottenServerUptimeKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-uptime" />;
}
