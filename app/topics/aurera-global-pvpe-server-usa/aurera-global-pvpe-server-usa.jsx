import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvpe-server-usa');
}

export default function AureraGlobalPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvpe-server-usa" />;
}
