import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-pvp-enforced-server');
}

export default function AureraGlobal11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-pvp-enforced-server" />;
}
