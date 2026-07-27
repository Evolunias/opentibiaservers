import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores');
}

export default function LowrateShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores" />;
}
