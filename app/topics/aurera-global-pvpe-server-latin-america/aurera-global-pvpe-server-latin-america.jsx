import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvpe-server-latin-america');
}

export default function AureraGlobalPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvpe-server-latin-america" />;
}
