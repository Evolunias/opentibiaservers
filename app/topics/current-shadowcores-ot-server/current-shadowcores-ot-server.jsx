import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-ot-server');
}

export default function CurrentShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-ot-server" />;
}
