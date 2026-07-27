import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-enforced-server-latin-america');
}

export default function AureraGlobalPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-enforced-server-latin-america" />;
}
