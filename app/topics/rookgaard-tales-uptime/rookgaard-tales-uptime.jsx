import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-uptime');
}

export default function RookgaardTalesUptimeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-uptime" />;
}
