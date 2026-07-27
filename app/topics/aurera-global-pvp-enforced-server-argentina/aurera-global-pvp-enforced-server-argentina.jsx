import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-enforced-server-argentina');
}

export default function AureraGlobalPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-enforced-server-argentina" />;
}
