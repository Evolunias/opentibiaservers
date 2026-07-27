import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-login');
}

export default function CustomShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-login" />;
}
