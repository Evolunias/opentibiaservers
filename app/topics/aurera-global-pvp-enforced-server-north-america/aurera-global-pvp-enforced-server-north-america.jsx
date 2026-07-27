import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-enforced-server-north-america');
}

export default function AureraGlobalPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-enforced-server-north-america" />;
}
