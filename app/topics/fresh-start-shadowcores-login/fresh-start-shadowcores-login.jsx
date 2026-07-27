import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-login');
}

export default function FreshStartShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-login" />;
}
