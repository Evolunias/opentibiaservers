import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-ot-server');
}

export default function FreshStartShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-ot-server" />;
}
