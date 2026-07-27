import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-europe');
}

export default function CanobPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-europe" />;
}
