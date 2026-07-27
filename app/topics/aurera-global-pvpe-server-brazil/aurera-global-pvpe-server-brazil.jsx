import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvpe-server-brazil');
}

export default function AureraGlobalPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvpe-server-brazil" />;
}
