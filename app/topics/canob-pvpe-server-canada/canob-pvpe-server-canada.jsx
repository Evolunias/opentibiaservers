import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-canada');
}

export default function CanobPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-canada" />;
}
