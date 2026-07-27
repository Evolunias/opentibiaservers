import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-0-pvp-enforced-server');
}

export default function AureraGlobal80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-0-pvp-enforced-server" />;
}
