import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-latin-america');
}

export default function AureraGlobalPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-latin-america" />;
}
