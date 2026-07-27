import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-aurera-global-server');
}

export default function PvpEnforcedAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-aurera-global-server" />;
}
