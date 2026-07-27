import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-login');
}

export default function ActiveShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-login" />;
}
