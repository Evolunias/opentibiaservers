import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-usa');
}

export default function CanobPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-usa" />;
}
