import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores');
}

export default function CurrentShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores" />;
}
