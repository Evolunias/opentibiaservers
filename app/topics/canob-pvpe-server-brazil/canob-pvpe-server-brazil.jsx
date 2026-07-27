import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-brazil');
}

export default function CanobPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-brazil" />;
}
