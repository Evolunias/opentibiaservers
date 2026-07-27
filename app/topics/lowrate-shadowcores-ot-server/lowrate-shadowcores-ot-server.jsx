import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-ot-server');
}

export default function LowrateShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-ot-server" />;
}
