import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores');
}

export default function ShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="shadowcores" />;
}
