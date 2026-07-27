import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-ot-server');
}

export default function TopShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-ot-server" />;
}
