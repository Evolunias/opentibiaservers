import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-server');
}

export default function BestShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-server" />;
}
