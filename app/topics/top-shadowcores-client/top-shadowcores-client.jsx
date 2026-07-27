import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-client');
}

export default function TopShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-client" />;
}
