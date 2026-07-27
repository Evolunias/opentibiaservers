import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-uptime');
}

export default function OtservlistUptimeKeywordPage() {
  return <StaticKeywordPage slug="otservlist-uptime" />;
}
