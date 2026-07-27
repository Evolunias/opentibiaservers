import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-uptime');
}

export default function CanobUptimeKeywordPage() {
  return <StaticKeywordPage slug="canob-uptime" />;
}
