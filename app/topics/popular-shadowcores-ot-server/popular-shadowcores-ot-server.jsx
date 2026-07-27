import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-ot-server');
}

export default function PopularShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-ot-server" />;
}
