import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-shadowcores-server');
}

export default function PvpeShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-shadowcores-server" />;
}
