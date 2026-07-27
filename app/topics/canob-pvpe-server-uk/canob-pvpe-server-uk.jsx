import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-uk');
}

export default function CanobPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-uk" />;
}
