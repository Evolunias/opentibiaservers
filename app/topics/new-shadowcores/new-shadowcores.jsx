import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores');
}

export default function NewShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores" />;
}
