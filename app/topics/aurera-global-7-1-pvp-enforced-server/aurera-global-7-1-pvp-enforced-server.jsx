import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-1-pvp-enforced-server');
}

export default function AureraGlobal71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-1-pvp-enforced-server" />;
}
