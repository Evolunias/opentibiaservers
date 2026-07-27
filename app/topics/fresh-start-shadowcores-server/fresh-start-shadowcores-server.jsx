import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-server');
}

export default function FreshStartShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-server" />;
}
