import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-enforced-server-usa');
}

export default function AureraGlobalPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-enforced-server-usa" />;
}
