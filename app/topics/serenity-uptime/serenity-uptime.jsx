import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-uptime');
}

export default function SerenityUptimeKeywordPage() {
  return <StaticKeywordPage slug="serenity-uptime" />;
}
