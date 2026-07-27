import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-shadowcores-server');
}

export default function NonPvpShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-shadowcores-server" />;
}
