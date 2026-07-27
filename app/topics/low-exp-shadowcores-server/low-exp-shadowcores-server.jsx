import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-shadowcores-server');
}

export default function LowExpShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-shadowcores-server" />;
}
