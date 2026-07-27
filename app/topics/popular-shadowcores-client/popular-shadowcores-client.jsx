import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-client');
}

export default function PopularShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-client" />;
}
