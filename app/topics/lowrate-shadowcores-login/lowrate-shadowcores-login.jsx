import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-login');
}

export default function LowrateShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-login" />;
}
