import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-login');
}

export default function CurrentShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-login" />;
}
