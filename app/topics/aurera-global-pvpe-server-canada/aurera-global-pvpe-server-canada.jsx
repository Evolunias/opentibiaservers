import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvpe-server-canada');
}

export default function AureraGlobalPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvpe-server-canada" />;
}
