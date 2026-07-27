import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-client');
}

export default function CurrentShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-client" />;
}
