import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-brazil');
}

export default function ArcaniarlPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-brazil" />;
}
