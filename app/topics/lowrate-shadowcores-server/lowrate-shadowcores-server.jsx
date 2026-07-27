import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-server');
}

export default function LowrateShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-server" />;
}
