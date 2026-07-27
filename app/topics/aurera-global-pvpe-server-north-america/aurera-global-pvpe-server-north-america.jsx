import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvpe-server-north-america');
}

export default function AureraGlobalPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvpe-server-north-america" />;
}
