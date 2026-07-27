import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-ot-server');
}

export default function BestShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-ot-server" />;
}
