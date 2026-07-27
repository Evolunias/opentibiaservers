import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-client');
}

export default function BestShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-client" />;
}
