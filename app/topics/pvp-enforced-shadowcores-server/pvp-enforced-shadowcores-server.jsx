import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-shadowcores-server');
}

export default function PvpEnforcedShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-shadowcores-server" />;
}
