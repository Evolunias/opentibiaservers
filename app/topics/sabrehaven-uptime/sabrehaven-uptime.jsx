import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-uptime');
}

export default function SabrehavenUptimeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-uptime" />;
}
