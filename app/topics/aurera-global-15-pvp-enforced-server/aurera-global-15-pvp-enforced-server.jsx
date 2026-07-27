import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-pvp-enforced-server');
}

export default function AureraGlobal15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-pvp-enforced-server" />;
}
