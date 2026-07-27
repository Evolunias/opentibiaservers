import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibiascape-server');
}

export default function PvpEnforcedTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibiascape-server" />;
}
