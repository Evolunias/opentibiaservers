import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores');
}

export default function CustomShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores" />;
}
