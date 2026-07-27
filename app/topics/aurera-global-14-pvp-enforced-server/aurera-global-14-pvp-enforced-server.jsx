import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-pvp-enforced-server');
}

export default function AureraGlobal14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-pvp-enforced-server" />;
}
