import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-uptime');
}

export default function OtservlistAlternativeUptimeKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-uptime" />;
}
