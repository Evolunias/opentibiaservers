import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-uptime');
}

export default function LumineraUptimeKeywordPage() {
  return <StaticKeywordPage slug="luminera-uptime" />;
}
