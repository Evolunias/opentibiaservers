import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-client');
}

export default function FreshStartShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-client" />;
}
