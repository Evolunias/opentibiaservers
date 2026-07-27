import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-server');
}

export default function CurrentShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-server" />;
}
