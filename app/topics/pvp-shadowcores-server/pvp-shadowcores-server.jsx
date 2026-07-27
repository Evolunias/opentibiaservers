import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-shadowcores-server');
}

export default function PvpShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-shadowcores-server" />;
}
