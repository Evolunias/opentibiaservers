import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-north-america');
}

export default function AureraGlobalPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-north-america" />;
}
