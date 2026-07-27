import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-uptime');
}

export default function NtoStarUptimeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-uptime" />;
}
