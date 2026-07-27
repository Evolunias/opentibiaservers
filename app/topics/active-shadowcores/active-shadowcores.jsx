import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores');
}

export default function ActiveShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores" />;
}
