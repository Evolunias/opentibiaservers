import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-ots');
}

export default function LowrateShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-ots" />;
}
