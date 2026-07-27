import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-shadowcores-server');
}

export default function HighExpShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-shadowcores-server" />;
}
