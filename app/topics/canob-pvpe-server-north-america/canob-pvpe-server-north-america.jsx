import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-north-america');
}

export default function CanobPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-north-america" />;
}
